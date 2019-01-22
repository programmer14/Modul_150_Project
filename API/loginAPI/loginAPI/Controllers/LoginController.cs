using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using loginAPI.Model;
using loginAPI.Models;
using System.Net.Mail;
using System.Net;

namespace loginAPI.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly EFloginContext _context;

        public LoginController(EFloginContext context)
        {
            _context = context;
        }

        // POST: api/Login/login
        [Route("login")]
        [HttpPost]
        public async Task<IActionResult> Login([FromBody]Login user)
        {
            User userDB = _context.User.Where(u => u.Email.Equals(user.Email, StringComparison.CurrentCultureIgnoreCase)).SingleOrDefault();

            if(userDB == null)
            {
                return BadRequest("Es wurde kein Benutzer mit dieser E-Mail gefunden!");
            }
            else if(!userDB.Passwort.Equals(user.Passwort))
            {
                return BadRequest("Passwort Falsch!");
            }
            else if(!userDB.UserEmailVerified)
            {
                return BadRequest("E-Mail nicht verifiziert!");
            }

            userDB.UserSessionToken = Guid.NewGuid().ToString("N");
            userDB.UserSessionTokenCreated = DateTime.Now;

            _context.SaveChanges();

            return Ok(userDB.UserSessionToken);
        }


        // POST: api/Login/register
        [Route("register")]
        [HttpPost]
        public async Task<IActionResult> Register([FromBody]Register user)
        {
            try{
                if (_context.User.Where(u => u.Email == user.Email).SingleOrDefault() != null)
                {
                    return BadRequest("E-Mail Adresse wird bereits verwendet.");
                }
                else
                {
                    var userDB = new User();
                    userDB.Anrede = user.Anrede;
                    userDB.Email = user.Email;
                    userDB.Name = user.Name;
                    userDB.Vorname = user.Vorname;
                    userDB.Passwort = user.Passwort;
                    userDB.Postleitzahl = user.Postleitzahl;
                    userDB.Ort = user.Ort;
                    userDB.Strasse = user.Strasse;
                    userDB.UserEmailToken = Guid.NewGuid().ToString("N");
                    _context.User.Add(userDB);
                    _context.SaveChanges();

                    var fromAddress = new MailAddress("LoginAPIProjekt150@gmail.com", "From Kay");
                    var toAddress = new MailAddress(userDB.Email, "To  " + userDB.Vorname);
                    const string fromPassword = "CooleEnte123";
                    const string subject = "Verifizierungs Mail";

                    string body = "<a href=\"http://localhost:4200/verify/" + userDB.UserEmailToken + "\">Verifizieren</a>";

                    var smtp = new SmtpClient
                    {
                        Host = "smtp.gmail.com",
                        Port = 587,
                        EnableSsl = true,
                        DeliveryMethod = SmtpDeliveryMethod.Network,
                        UseDefaultCredentials = false,
                        Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
                    };
                    using (var message = new MailMessage(fromAddress, toAddress)
                    {
                        Subject = subject,
                        Body = body,
                        IsBodyHtml = true

                    })
                    {
                        smtp.Send(message);
                    }

                }

                return Ok();
            }
            catch(Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        // POST: api/Login/verify
        [Route("verify/{token}")]
        [HttpGet]
        public async Task<IActionResult> Verify([FromRoute]string token)
        {
            var userDB = _context.User.Where(u => u.UserEmailToken.Equals(token)).SingleOrDefault();

            if(userDB != null)
            {
                userDB.UserEmailVerified = true;
                _context.SaveChanges();

            }

            return Ok();
        }

        // POST: api/Login/auth
        [Route("auth/{token}")]
        [HttpGet]
        public async Task<IActionResult> Auth([FromRoute]string token)
        {
            var userDB = _context.User.Where(u => u.UserSessionToken.Equals(token) && u.UserSessionTokenCreated.AddHours(2) > DateTime.Now).SingleOrDefault();

            if (userDB != null)
            {
                return Ok(true);

            }

            return Ok(false);
        }


    }
}
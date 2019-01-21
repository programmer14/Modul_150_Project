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

        // POST: api/Login/register
        [Route("register")]
        [HttpGet]
        public async Task<IActionResult> PostUser()
        {


            return Ok("Test");
        }


        // POST: api/Login/register
        [Route("register")]
        [HttpPost]
        public async Task<IActionResult> PostUser([FromBody]Register user)
        {
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

                string body = "<a href=\"http://localhost:4200/verify/"+ userDB.UserEmailToken + "\">Verifizieren</a>";

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



    }
}
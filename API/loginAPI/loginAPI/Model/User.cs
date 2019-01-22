using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace loginAPI.Model
{
    public class User
    {
        public int UserId { get; set; }
        public string Email { get; set; }
        public string Anrede { get; set; }
        public string Name { get; set; }
        public string Vorname { get; set; }
        public string Strasse { get; set; }
        public int Postleitzahl { get; set; }
        public string Ort { get; set; }
        public string Passwort { get; set; }
        public string UserSessionToken { get; set; }
        public DateTime UserSessionTokenCreated { get; set; }
        public string UserEmailToken { get; set; }
        public bool UserEmailVerified { get; set; }
    }
}

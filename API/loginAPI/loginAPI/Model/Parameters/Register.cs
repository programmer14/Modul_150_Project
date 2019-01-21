using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace loginAPI.Models
{
    public class Register
    {
        public string Email { get; set; }
        public string Anrede { get; set; }
        public string Name { get; set; }
        public string Vorname { get; set; }
        public string Strasse { get; set; }
        public int Postleitzahl { get; set; }
        public string Ort { get; set; }
        public string Passwort { get; set; }

    }
}
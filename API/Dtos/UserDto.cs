using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos
{
    public class UserDto
    {
        public string UserName { get; set; }
        public string token { get; set; }
        public string PhotoUrl { get; set; }
        public string KnownAs { get; set; }
    }
}
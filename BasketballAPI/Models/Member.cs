using System;
using System.Collections.Generic;

#nullable disable

namespace BasketballAPI.Models
{
    public partial class Member
    {
        public Member()
        {
            Games = new HashSet<Game>();
        }

        public int MemberId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool Pending { get; set; }

        public virtual ICollection<Game> Games { get; set; }
    }
}

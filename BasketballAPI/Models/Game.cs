using System;
using System.Collections.Generic;

#nullable disable

namespace BasketballAPI.Models
{
    public partial class Game
    {
        public int GameNumber { get; set; }
        public DateTime GameDate { get; set; }
        public string Name { get; set; }
        public string Payee { get; set; }
        public double? AmountPaid { get; set; }
        public string Venue { get; set; }
        public int MemberId { get; set; }

        public virtual Member Member { get; set; }
    }
}

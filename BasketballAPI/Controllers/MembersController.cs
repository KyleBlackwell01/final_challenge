using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BasketballAPI.Models;

namespace BasketballAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MembersController : ControllerBase
    {
        private readonly challengeContext _context;

        public MembersController(challengeContext context)
        {
            _context = context;
        }

        //Member Login
        [HttpPost, Route("memberlogin")]
        public async Task<IActionResult> Login(Login login)
        {
            var member = await _context.Member.Where(m => m.Email == login.Email).FirstOrDefaultAsync();

            if (member != null)
            {
                if (member.Pending == true)
                {
                    return Unauthorized("Account Pending");
                }
                else if (member.Password == login.Password)
                {
                    return Ok(member);
                }
                else
                {
                    return Unauthorized();
                }
            }
            else
            {
                return NotFound();
            }

        }

        //Register Members
        [HttpPost, Route("registermember")]
        public async Task<IActionResult> RegisterMember(Member member)
        {
            try
            {
                _context.Add(member);
                await _context.SaveChangesAsync();
                return Ok(member);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        //Create a Game
        [HttpPost, Route("creategame")]
        public async Task<IActionResult> CreateGame(Game game)
        {
            try
            {
                _context.Add(game);
                await _context.SaveChangesAsync();
                return Ok(game);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //Get all future games
        [HttpGet, Route("getgames")]
        public async Task<IActionResult> GetGames()
        {
            var games = await _context.Game.Where(g => g.GameDate > DateTime.Now).ToListAsync();

            if (games != null)
            {
                return Ok(games);
            }
            else
            {
                return NotFound();
            }
        }

        //Get all previous games
        [HttpGet, Route("getpastgames")]
        public async Task<IActionResult> GetPastGames()
        {
            var games = await _context.Game.Where(g => g.GameDate < DateTime.Now).ToListAsync();

            if (games != null)
            {
                return Ok(games);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost, Route("updategame")]
        public async Task<IActionResult> UpdateGame(Game game)
        {
            try
            {
                _context.Game.Update(game);
                await _context.SaveChangesAsync();
                return Ok(game);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //Delete a game
        [HttpDelete, Route("deletegame")]
        public async Task<IActionResult> DeleteGame(int gameNumber)
        {
            var game = await _context.Game.Where(g => g.GameNumber == gameNumber).FirstOrDefaultAsync();

            try
            {
                _context.Remove(game);
                await _context.SaveChangesAsync();
                return Ok(gameNumber);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //Return all team members and total court costs
        [HttpGet, Route("getallmembers")]
        public async Task<IActionResult> GetAllMembers()
        {
            var members = await _context.Member.Where(m => m.Pending == false).Select(m => m.Name).ToListAsync();

            if (members != null)
            {
                return Ok(members);
            }
            else
            {
                return NotFound();
            }
        }

/*         GET: api/Members
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Member>>> GetMember()
        {
            return await _context.Member.ToListAsync();
        }

         GET: api/Members/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Member>> GetMember(int id)
        {
            var member = await _context.Member.FindAsync(id);

            if (member == null)
            {
                return NotFound();
            }

            return member;
        }

         PUT: api/Members/5
         To protect from overposting attacks, enable the specific properties you want to bind to, for
         more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMember(int id, Member member)
        {
            if (id != member.MemberId)
            {
                return BadRequest();
            }

            _context.Entry(member).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MemberExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

         POST: api/Members
         To protect from overposting attacks, enable the specific properties you want to bind to, for
         more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Member>> PostMember(Member member)
        {
            _context.Member.Add(member);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMember", new { id = member.MemberId }, member);
        }

         DELETE: api/Members/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Member>> DeleteMember(int id)
        {
            var member = await _context.Member.FindAsync(id);
            if (member == null)
            {
                return NotFound();
            }

            _context.Member.Remove(member);
            await _context.SaveChangesAsync();

            return member;
        }

        private bool MemberExists(int id)
        {
            return _context.Member.Any(e => e.MemberId == id);
        }*/
    }
}

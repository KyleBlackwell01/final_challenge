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

        //Gets pending/unapproved members
        [HttpGet, Route("getpending")]
        public async Task<IActionResult> GetMembers()
        {
            var members = await _context.Member.Where(m => m.Pending == true).Select(m => m.Name).ToListAsync();

            if (members != null)
            {
                return Ok(members);
            }
            else
            {
                return NotFound();
            }

        }

        [HttpPut, Route("approveMember")]
        public async Task<IActionResult> ApproveMember(Member member)
        {
            try
            {
                _context.Member.Update(member);
                await _context.SaveChangesAsync();
                return Ok(member);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



    }
}

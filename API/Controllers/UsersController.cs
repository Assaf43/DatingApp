using API.Data;
using API.Dtos;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IUserRepository _userRepsitory;
        private readonly IMapper _mapper;
                
        public UsersController(IUserRepository userRepsitory, IMapper mapper)
        {                  
            _mapper = mapper;
            _userRepsitory = userRepsitory;
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MembersDto>>> GetUserts()
        {
            var users = await _userRepsitory.GetMembersAsync();            
            return Ok(users);
        }
        
        [HttpGet("{username}")]
        public async Task<ActionResult<MembersDto>> GetUser(string username)
        {
            return await _userRepsitory.GetMemberAsync(username);            
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace AngularTsStart.Web.Controllers
{
    [RoutePrefix("api/data")]
    public class DataController :ApiController
    {
        [HttpGet]
        [Route("")]
        public IHttpActionResult Get()
        {
            return Ok("minden jo");
        }
    }
}
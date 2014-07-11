using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularDotNetMVC.Controllers
{
    public class FilesController : Controller
    {
        // GET: Files
        public ActionResult HomeController()
        {
            
                return new FilePathResult("~/File/HomeController.js", "text/javascript");
            
        }
        public ActionResult CandidatesController()
        {
            if (User.Identity.IsAuthenticated)
            {
                return new FilePathResult("~/File/CandidatesController.js", "text/javascript");
            }
            else
            {
                return new FilePathResult("~/File/FalseCandidatesController.js", "text/javascript");
            }
        }
        public ActionResult PlatformController()
        {
            if (User.Identity.IsAuthenticated)
            {
                return new FilePathResult("~/File/PlatformController.js", "text/javascript");
            }
            else
            {
                return new FilePathResult("~/File/FalsePlatformController.js", "text/javascript");
            }
        }
      
    }
}
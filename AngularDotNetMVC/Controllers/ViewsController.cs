using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularDotNetMVC.Controllers
{
    public class ViewsController : Controller
    {
        // GET: Views
        public ActionResult Index()
        {
            if (User.Identity.IsAuthenticated)
            {
                return View();
            }
            else
            {
                return View("FalseIndex");
            }
        }
        public ActionResult Candidates()
        {
            return View();
          
        }
        public ActionResult Platform()
        {
            if (User.Identity.IsAuthenticated)
            {
                return View();
            }
            else
            {
                return View("FalsePlatform");
            }
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace AngularTsStart.Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            // byebye xml, welcome json
            config.Formatters.Remove(config.Formatters.XmlFormatter);
        }
    }
}

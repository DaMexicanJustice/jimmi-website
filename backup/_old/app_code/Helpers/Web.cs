using System;
using System.Web;
using System.Net;
using System.Text;
using System.IO;
using Umbraco.Core.Models;
using Umbraco.Web.Models;
using Umbraco.Core.Models.PublishedContent;

namespace Base
{
    public class Web
    {
        /**
         * Get request
         */
        public static HttpRequest GetRequest()
        {
            return HttpContext.Current.Request;
        }

        /**
         * Redirect
         */
        public static void Redirect(string url)
        {
            HttpContext.Current.Response.Redirect(url);
        }
        

        /**
         * Prevent nodes with unique URLs from hotlinking
         */
        public static void PreventHotLink(IPublishedContent page)
        {
            string req = GetRequest().Path;

            if(req == page.Url)
            {
                Redirect("/");
            }
        }
    }
}
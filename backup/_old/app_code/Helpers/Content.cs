using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json.Linq;
using Umbraco.Core;
using Umbraco.Core.Models;
using Umbraco.Core.Services;
using Umbraco.Web;
using Umbraco;
using System.Net;
using Umbraco.Web.Models;
using Umbraco.Core.Logging;
using Umbraco.Core.Models.PublishedContent;


namespace Base
{
    public class Content
    {
        /**
         * Context
         */

        public enum ContentPageTypeE
        {
            Page = 1,
            Ribbon = 2
        }

        private static IPublishedContent _mCurrentPage;


        public static string StripHtmlTags( string str )
        {
            return Regex.Replace( str, "<.*?>", string.Empty );
        }

        /**
         * Truncate words
         */
        public static string TruncateWords(object val, int length, bool useDots = false)
        {
            return TruncateWords(val.ToString(), length, useDots);
        }

        public static string TruncateWords(string val, int length, bool useDots = false)
        {
            if (val == null || val.Length < length || val.IndexOf(" ", length) == -1)
            {
                return val;
            }
            else
            {
                string result = val.Substring(0, val.IndexOf(" ", length));

                if(useDots)
                {
                    result += "...";
                }

                return result;
            }
        }

        /**
         * Truncate string
         */
        public static string TruncateString(string val, int maxLength, bool addDots = false)
        {
            if(string.IsNullOrEmpty(val))
            {
                return val;
            }
            else
            {
                if(val.Length <= maxLength)
                {
                    return val;
                }
                else
                {
                    if(addDots)
                    {
                        return val.Substring(0, maxLength - 3) + "...";
                    }
                    else
                    {
                        return val.Substring(0, maxLength);
                    }
                }
            }
        } 
        

        /**
         * Render newlines in textarea fields as html line breaks
         */
        public static string getLineBreaksInTextarea(string text)
        {
            return text.Replace(Environment.NewLine,"<br>").Replace("\n", "<br>");
        }

        /**
         * Remove all HTML tags
         */
         public static string removeHTMLTags(string text)
         {
             // Replace html tags and a tags following space
             return Regex.Replace(text, @"<[^>]+>|&nbsp;", "").Trim();
         }
      
    }
}
    
    function fetchRSSFeed() {
      var element = document.getElementById("rss_feed");
      var feed = new google.feeds.Feed(element.dataset.feed);     
      feed.setNumEntries(element.dataset.count);
      feed.load(showRSSFeed);
    }

    function showRSSFeed(result) {

      var html = "";

      if (!result.error) {
        var entries = result.feed.entries;
        for (var i = 0; i < entries.length; i++) {
          html += "<li><a href='" + entries[i].link + "'target='_blank'>" + entries[i].title + "</a></li>"
        }
      } else {
        html = "Error: " + result.error.message;
      }

      document.getElementById("rss_feed").innerHTML = "<ul>" + html + "</ul>";
    }

    window.onload = function() {
      fetchRSSFeed();
    }
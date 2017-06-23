window.onload = function () {
     var tree = document.getElementById("menu_arbol");
     var lists = [ menu_arbol ];
     for (var i = 0; i < tree.getElementsByTagName("ul").length; i++)
          lists[lists.length] = tree.getElementsByTagName("ul")[i];
     for (var i = 0; i < lists.length; i++) {
          var item = lists[i].lastChild;
          while (!item.tagName || item.tagName.toLowerCase() != "li")
          item = item.previousSibling;
          item.className += " cierre";
     }
};

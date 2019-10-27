
// Initial the tab pages from div name = n
function initialTabPages(name) {
	var tabArea = document.getElementById(name);
	var tabHeaders = document.getElementsByName("tab-page-head");
	var tabPages = tabArea.querySelector("#tab-pages").childNodes;
	
	for(var i = 0; i < tabHeaders.length; i++) {
		var tabHead = tabHeaders[i];
		// console.log(tabHead);
		tabHead.setAttribute("OnClick", "activateTab(this);");
	}

}


function activateTab(parent) {	
	var tabArea = parent.parentNode.parentNode.parentNode;
	var tabPagesArea = tabArea.querySelector("#tab-pages");
	var tabPages = tabPagesArea.childNodes;
	var tabHeader =  document.getElementsByName("tab-page-head");
	var parentTabPage = tabPagesArea.querySelector("#" + parent.getAttribute("tab-page"));
	
	// Hide all tab pages and select the new one
	for(var i = 0; i < tabPages.length; i++)
	{
		if(tabPages[i].tagName == "DIV" && tabPages[i].getAttribute("name") == "tab-page")
		{
			tabPages[i].style.display = "none";
		}
	}	
	parentTabPage.style.display = "inherit";
	
	// Hide all tab header and select the new one
	for(var i = 0; i < tabHeader.length; i++)
	{
		if(tabHeader[i].parentNode.parentNode.parentNode == tabArea)
		{
			tabHeader[i].removeAttribute("selected");
		}
	}
	
	parent.setAttribute("selected", true);
}

function activateTabByID(tabcontrol, tabid) {
	var tabArea = document.getElementById(tabcontrol);
	var tabPagesArea = tabArea.querySelector("#tab-pages");
	var tabPages = tabPagesArea.childNodes;
	var selectedTabPage = tabPagesArea.querySelector("#" + tabid);
	var tabHeader = document.getElementsByName("tab-page-head");
	
	for(var i = 0; i < tabPages.length; i++)
	{
		if(tabPages[i].tagName == "DIV" && tabPages[i].getAttribute("name") == "tab-page")
		{
			tabPages[i].style.display = "none";
		}
	}	
	selectedTabPage.style.display = "inherit";
	
	for(var i = 0; i < tabHeader.length; i++) 
	{
		if(tabHeader[i].parentNode.parentNode.parentNode == tabArea) 
		{
			if(tabHeader[i].getAttribute("tab-page") == tabid)
			{
				tabHeader[i].setAttribute("selected", true);
			}
			else
			{
				tabHeader[i].removeAttribute("selected");
			}
		}
	}
}

function setStyleSheet(tabpage, styleurl) {

}
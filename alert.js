function changeOgTitle(newOgTitle){
	var $ogTitleMetaTag = $('meta[property="og\\:title"]');
	$ogTitleMetaTag.attr('content', newOgTitle);
}




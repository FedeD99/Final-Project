window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    let region = urlParams.get('region');
    if (region == 'North_America')
    {
        region = 'North America';
    }
    else if (region == 'South_America')
    {
        region = 'South America';
    }
    document.title = region;
  });

const topBarCenterText = `VE7SCC - CN89of`;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
//["2196F3", "CLUBLOG", "https://clublog.org/livestream/VE7VT", "1.7"],
["2196F3","CONTEST","https://www.contestcalendar.com/fivewkcal.html","1",],
["2196F3", "RAC Band Plan", "https://www.rac.ca/mivahih/2023/06/IBC_July2023_Bandplan_0%E2%80%9330-796x1024.jpg", "1"],
["FF3300", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
["FF3300", "PSK Reporter",  "https://pskreporter.info/pskmap.html?preset&timerange=900&distunit=km&hideunrec=1&blankifnone=1&showtx=1&showgrid=1&showsnr=1&mapCenter=24.42612574674672,-45.88187778597416,1.8879766037125625", "1"],
["FF3300", "HamClock", "http://192.168.2.130:8082/live.html", "1"],
//["2196F3", "PISTAR", "http://pi-star.local/", "1.2"],
["2196F3", "LIGHTNING", "https://map.blitzortung.org/#2.07/42.5/-115.63","1","R",],
["2196F3", "RADAR",  "https://weather.gc.ca/?layers=alert,radar&center=55.52457287,-99.02005781&zoom=4&alertTableFilterProv=ON","1","R"],
["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
["2196F3", "WEATHER", "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=48.396&lon=-123.625&zoom=5", "1", "R",],
["2196F3", "WINDS",   "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-119.68,49.79,3000", "1", "R",],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  [ "Tower 1", "iframe|http://192.168.2.42/rotator.htm", ],
  [ "Tower 2", "iframe|http://192.168.2.40/rotator.htm", ],
  [ "Tower 3", "iframe|http://192.168.2.50/rotator.htm", ],
  ["HF PROPAGATION",
    "https://www.hamqsl.com/solar101vhf.php",
    "https://www.hamqsl.com/solar100sc.php",
    "https://www.hamqsl.com/solarpich.php"
  ],
  [ "", "http://192.168.2.130:8080/get_capture.bmp" ],
  [
    "RADAR",
    "iframe|https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=Â°C&metricWind=km/h&zoom=2&overlay=radar&product=radar&level=surface&lat=40&lon=-100",
    "iframe|https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=Â°C&metricWind=km/h&zoom=5&overlay=radar&product=ecmwf&level=surface&lat=49.254&lon=-122.863",
  ],
  [
    "SATELLITE CAN",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/can/EXTENT3/GOES16-CAN-EXTENT3-1125x560.gif",
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
    //"iframe|https://map.blitzortung.org/#1.5/44/-87",
  ],
  [
    "LIGHTNING LOCAL",
    "iframe|https://map.blitzortung.org/#6/49/-124.9",
  ],
  [
    "Maximum Usable Frequency",
    "https://prop.kc2g.com/renders/current/mufd-normal-now.svg",
  ],
  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
  ],
  ["10M PROPAGATION", "https://www.tvcomm.co.uk/g7izu/Autosave/NA_ES_AutoSave.JPG"],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
const tileDelay = [
  11200,10000,11000,10100,
  10200,10500,10300,10600,
  30400,60700,60900,10800
];

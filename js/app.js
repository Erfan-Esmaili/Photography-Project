const locationBtn = document.getElementById("locationBtn");

locationBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const latitude = 32.713556;
  const longitude = 51.670639;
  
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  const geoUrl = `geo:${latitude},${longitude}?q=${latitude},${longitude}`;

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // اگر موبایل است، از geo: استفاده کن
    window.location.href = geoUrl;
  } else {
    // اگر دسکتاپ است، از Google Maps استفاده کن
    window.open(googleMapsUrl, "_blank");
  }
});

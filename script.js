const data = window.SITE_CONTENT;
document.title = data.artistName;
document.getElementById("artistName").textContent = data.artistName;
document.getElementById("heroImage").src = data.heroImage;
document.getElementById("spotifyLink").href = data.socialLinks.spotify;
document.getElementById("instagramLink").href = data.socialLinks.instagram;
document.getElementById("tiktokLink").href = data.socialLinks.tiktok;
document.getElementById("snapchatLink").href = data.socialLinks.snapchat;
document.getElementById("releaseTitle").textContent = data.newRelease.title;
document.getElementById("releaseSubtitle").textContent = data.newRelease.subtitle;
document.getElementById("releaseCover").src = data.newRelease.cover;
const releaseLink = document.getElementById("releaseLink");
if (data.newRelease.listenUrl && data.newRelease.listenUrl !== "#") {
  releaseLink.href = data.newRelease.listenUrl;
  releaseLink.classList.remove("disabled-button");
  releaseLink.removeAttribute("aria-disabled");
  releaseLink.textContent = "Listen";
} else {
  releaseLink.href = "#";
  releaseLink.classList.add("disabled-button");
  releaseLink.setAttribute("aria-disabled", "true");
  releaseLink.textContent = "Stay Tuned";
}
const data = window.SITE_CONTENT;
document.title = data.artistName;
document.getElementById("artistName").textContent = data.artistName;
document.getElementById("heroImage").src = data.heroImage;
document.getElementById("spotifyLink").href = data.socialLinks.spotify;
document.getElementById("instagramLink").href = data.socialLinks.instagram;
document.getElementById("tiktokLink").href = data.socialLinks.tiktok;
document.getElementById("snapchatLink").href = data.socialLinks.snapchat;

document.getElementById("comingSoonKicker").textContent = data.upcomingRelease.kicker;
document.getElementById("comingSoonHeading").textContent = data.upcomingRelease.heading;
document.getElementById("releaseTitle").textContent = data.upcomingRelease.title;
document.getElementById("releaseSubtitle").textContent = data.upcomingRelease.subtitle;
document.getElementById("releaseCover").src = data.upcomingRelease.cover;

const releaseLink = document.getElementById("releaseLink");
if (data.upcomingRelease.smartLink && data.upcomingRelease.smartLink !== "#") {
  releaseLink.href = data.upcomingRelease.smartLink;
  releaseLink.classList.remove("disabled-button");
  releaseLink.removeAttribute("aria-disabled");
  releaseLink.textContent = "Open smart link";
} else {
  releaseLink.href = "#";
  releaseLink.classList.add("disabled-button");
  releaseLink.setAttribute("aria-disabled", "true");
  releaseLink.textContent = "Takipte kalın";
}

const scroller = document.getElementById("musicScroller");
data.musics.forEach((music) => {
  const wrapper = document.createElement("a");
  wrapper.className = "music-card-link";
  wrapper.href = music.smartLink;
  wrapper.target = "_blank";
  wrapper.rel = "noopener";

  wrapper.innerHTML = `
    <article class="music-card">
      <img class="music-cover" src="${music.cover}" alt="${music.title} cover" />
      <div class="music-meta">
        <h3>${music.title}</h3>
        <p>${music.subtitle}</p>
      </div>
    </article>
  `;
  scroller.appendChild(wrapper);
});

const skill = document.querySelector('.skill-line');
skill.hidden = true;

document.addEventListener("click", function(e) {
    let m = document.getElementById('skill-line-id');
    if (e.target.id != 'read-more-link-id' && e.target.id != 'skill-line-id') {
        m.style.animation = 'BackTime';
    } else if (e.target.id == 'read-more-link-id') {
      m.style.display = (m.style.display != 'block') ? 'block' : 'none';
    }
  });
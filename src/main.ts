const pending = `
<div class="branch-action-item">
    <div class="branch-action-item-icon completeness-indicator">
      <svg class="donut-chart" width="30" height="30">
        <circle stroke-width="6" cx="15" cy="15" r="12" style="fill: none; stroke: #dbab09;" class="pending"></circle>
      </svg>

    </div>
    <div class="h4 status-heading text-yellow">Required statuses must pass before merging</div>
    <span class="status-meta">
        All required <a href="https://developer.github.com/v3/repos/statuses/" data-ga-click="Protected Branches, go to statuses docs, from:pull request merge area">statuses</a> and check runs on this pull request must run successfully to enable automatic merging.
    </span>
</div>
`

function murgeBaby() {
  console.log('i got u baby ;)');
  let i = 1;

  const id = setInterval(() => {
    const murgeBtn = document.querySelector('.btn-group-merge').children[0];
    if (!murgeBtn.disabled) {
      console.log('shippin...')
      murgeBtn.click();
      document.querySelectorAll('.btn-group-merge')[1].children[0].click();
      clearInterval(id);
    } else {
      console.log('not ready', i++)
    }
  }, 2000);
}
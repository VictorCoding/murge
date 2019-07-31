const $ = (selectors) => document.querySelector(selectors);
const dropDown = $('.btn-group-merge').children[1];
const modal = $('.select-menu-list.js-navigation-container');
dropDown.disabled = false;

const murgeBtn = `
<div class="select-menu-item js-navigation-item">
  <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" data-children-count="0"></path></svg>
  <div class="select-menu-item-text">
    <span class="select-menu-item-heading js-select-button-text">Murge After Builds</span>
    <span class="description">
        This PR will be merged after all green lights.
    </span>
  </div>
</div>
`;

const tempDiv = document.createElement('div')
tempDiv.innerHTML = murgeBtn;
tempDiv.addEventListener('click', () => {
  murgeBaby();
});

modal.insertBefore(tempDiv, modal.firstChild);

function murgeBaby() {
  console.log('i got u baby ;)');
  let i = 1;

  const id = setInterval(() => {
    const murgeBtn = $('.btn-group-merge').children[0];
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
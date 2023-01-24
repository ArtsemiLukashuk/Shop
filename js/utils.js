export function getId(element) {
  return parseInt(element.id.split('-')[1]);
}

export function generateId(items) {
  const ids = items.map((item) => {
    return item.id;
  });

  if (!ids.length) {
    return 1;
  }

  const maxId = Math.max(...ids);

  return maxId + 1;
}

export function getListIdByUrl() {
  const currentUrl = window.location.pathname;

  const splittedCurrentUrl = currentUrl.split('/');

  return parseInt(splittedCurrentUrl[splittedCurrentUrl.length - 1], 10);
}

export function checkIfHasErrors(errors) {
  return Object.keys(errors).some(key => errors[key].length > 0)
}
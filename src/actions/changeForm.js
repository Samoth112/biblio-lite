export function changeForm(e) {
  return {
    type: e.target.dataset.actionType,
    e
  }
}
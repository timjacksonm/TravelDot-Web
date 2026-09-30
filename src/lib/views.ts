// Shows the [data-view] block with this name, hides the rest, and moves focus to it so screen
// readers announce the change.
export function showView(name: string) {
  for (const view of document.querySelectorAll<HTMLElement>("[data-view]")) {
    view.hidden = view.dataset.view !== name;
    if (!view.hidden) view.focus();
  }
}

export function tokenFromUrl(): string | null {
  return new URLSearchParams(window.location.search).get("token");
}

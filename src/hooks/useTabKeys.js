export default function useTabKeys(items, selected, setSelected, orientation = 'horizontal') {
  return (event) => {
    const previous = orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
    const next = orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';
    let index = items.findIndex((item) => item.id === selected);
    if (event.key === next) index = (index + 1) % items.length;
    else if (event.key === previous) index = (index - 1 + items.length) % items.length;
    else if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = items.length - 1;
    else return;
    event.preventDefault();
    setSelected(items[index].id);
    event.currentTarget.querySelectorAll('[role="tab"]')[index]?.focus();
  };
}

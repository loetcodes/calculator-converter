// GeneralCommon JS functions in use by both Calculator or Currency Converter.


export const addClass = (element, classItem) => {
  // Adds a given class to an element.
  if (!element.classList.contains(classItem)) {
    element.classList.add(classItem);
  }
}

export const removeClass = (element, classItem) => {
  // Removes a given class from an element.
  if (element.classList.contains(classItem)) {
    element.classList.remove(classItem);
  }
}

export const changeContent = (element, newText) => {
  // Changes the inner content of an element.
  element.innerHTML = newText;
}



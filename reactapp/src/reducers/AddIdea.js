export default function (ideaContent = [], action) {
  if (action.type === "addIdea") {
    var ideaContentCopy = [...ideaContent];
    ideaContentCopy.push({
      title: action.idea,
      ideaDesc: action.ideaDescription,
      ideaId: action.Id,
    });
    return ideaContentCopy;
  } else if (action.type == "deleteIdea") {
    var ideaContentCopy = [...ideaContent];
    var position = null;

    for (let i = 0; i < ideaContentCopy.length; i++) {
      if (ideaContentCopy[i].ideaId == action.ideaId) {
        position = i;
      }
    }
    if (position != null) {
      ideaContentCopy.splice(position, 1);
    }

    return ideaContentCopy;
  } else {
    return ideaContent;
  }
}
const sortHotels = (list, type = 'descend') => {
  return list.sort((a, b) => {
    if (a.points !== b.points) {
      return type === 'descend' ? b.points - a.points : a.points - b.points;
    } else if (a.updatedAt !== b.updatedAt) {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    } else {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });
};

export default sortHotels;

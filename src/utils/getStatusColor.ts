export const statusColor = (status :string) => {
    switch (status) {
      case "só entregar":
        return "#2EDBBC";
        break;
      case "anotado":
        return "#E9AB0B";
        break;
      case "andamento":
        return "#F97B34";
        break;
    }
  };
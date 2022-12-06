import React, { createContext, useState } from "react";

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},

  header: {
    logoImg: "",
    navigateArr: ["Home", "Pricing", "About", "Contact"],
    buttonContent: "See Demo",
  },
  updateHeader: () => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoiteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoiteMealIds((currentIds) => [...currentIds, id]);
  }

  function removeFavorite(id) {
    setFavoiteMealIds((currentIds) =>
      currentIds.filter((mealId) => mealId !== id)
    );
  }

  //header
  const [headerData, setHeaderData] = useState({
    logoImg: "",
    navigateArr: ["Home", "Pricing", "About", "Contact"],
    buttonContent: "See Demo",
  });

  function updateHeader(data) {
    setHeaderData((current) => {
      return { ...current, ...data };
    });
  }

  //introSection
  const [introData, setIntroData] = useState({
    title: "intro",
    description:
      "Aplikasi Bantu warga merupakan aplikasi berbasis mobile dengan konsep kesehatan yang berkaitan dengan keadaan covid sekarang",
    img: "",
  });

  function updateIntro(data) {
    setIntroData((current) => {
      return { ...current, ...data };
    });
  }

  //infoSection
  const [infoData, setInfoData] = useState({
    title: "",
    description:
      "Aplikasi Bantu warga merupakan aplikasi berbasis mobile dengan konsep kesehatan yang berkaitan dengan keadaan covid sekarang",
    cardArr: [
      {
        img: "",
        title: "Dnor darah",
        description: "Cek ketersediaan donor darah atau mau donor darah",
      },
    ],
    buttonContent: "Load more",
  });

  function updateInfo(data) {
    setInfoData((current) => {
      return { ...current, ...data };
    });
  }

  //downloadSection
  const [downloadData, setDownloadData] = useState({
    title: "",
    description:
      "Aplikasi Bantu warga merupakan aplikasi berbasis mobile dengan konsep kesehatan yang berkaitan dengan keadaan covid sekarang",
    cardArr: [
      {
        img: "",
        title: "Dnor darah",
        description: "Cek ketersediaan donor darah atau mau donor darah",
      },
    ],
    buttonContent: "Load more",
  });

  function updateDownload(data) {
    setDownloadData((current) => {
      return { ...current, ...data };
    });
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,

    header: headerData,
    updateHeader: updateHeader,

    introSection: introData,
    updateIntro: updateIntro,

    infoSection: infoData,
    updateInfo: updateInfo,

    downloadSection: downloadData,
    updateDownloadSect: updateDownload,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesContext, FavoritesContextProvider };

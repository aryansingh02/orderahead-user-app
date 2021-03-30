//
import React from "react";
import config from "react-global-configuration";
import NumberFormat from "react-number-format";
import {format} from "date-fns";
import moment from "moment";
import getSymbolFromCurrency from "currency-symbol-map";

import {isValidPhoneNumber} from "react-phone-number-input";

export const checkError = (userInfo, error, setError) => {
  if (
    !IsValidName(userInfo.name) ||
    !isValidPhoneNumber(userInfo.phoneNumber)
  ) {
    let copy = {...error};
    if (!IsValidName(userInfo.name)) {
      copy.nameError = "Name is Invalid";
    }
    if (!isValidPhoneNumber(userInfo.phoneNumber)) {
      copy.phoneError = "Phone number is invalid";
    }
    setError(copy);
    return false;
  }
  return true;
};

export const GenerateCurrencyNumber = (price) => {
  return (
    <NumberFormat
      value={price.amount / 100}
      decimalScale={2}
      fixedDecimalScale={true}
      displayType={"text"}
      thousandSeparator={true}
      prefix={getSymbolFromCurrency(price.currency)}
      renderText={(value) => <span>{value}</span>}
    />
  );
};

export const IsValidName = (name) => {
  return (
    name &&
    typeof name === "string" &&
    name.length < 30 &&
    name !== "" &&
    /[a-zA-Z]/.test(name)
  );
};

export const createModifiers = (modifiers) => {
  let modStr = "";
  if (Array.isArray(modifiers)) {
    modifiers.map((modifier, index) => {
      modifier.chosenValue.forEach((value, ind) => {
        modStr += value.name;
        if (ind !== modifier.chosenValue.length - 1) {
          modStr += " ";
        }
        return null;
      });
      if (index !== modifiers.length - 1) {
        modStr += ", ";
      }
      return null;
    });
  }
  return modStr;
};

/**
 * Item is stock if is is marked in stock and at
 * least one variation is marked in stock.
 * @param menuItem
 * @returns {boolean}
 */
export const isMenuItemInStock = (menuItem) => {
  if (menuItem.status !== "IN_STOCK") {
    return false;
  }
  return menuItem.variations.findIndex((vr) => vr.status === "IN_STOCK") !== -1;
};

export const checkLineItemsAvailability = (cart, stall) => {
  let notAvailableLineItems = [];

  // eslint-disable-next-line
  if (cart && cart.lineItems) {
    cart.lineItems.forEach((lineItem) => {
      const menuItem = stall.menu.menuItems.find(
        (menuItem) => menuItem._id === lineItem.cartItem.itemId
      );
      // menu item not found in stall
      if (!menuItem || menuItem.status !== "IN_STOCK") {
        notAvailableLineItems.push(lineItem);
      } else {
        const currentVariation = menuItem.variations.find(
          (vr) => vr._id === lineItem.cartItem.selectedVariation._id
        );
        if (!currentVariation || currentVariation.status !== "IN_STOCK") {
          // variation not found
          notAvailableLineItems.push(lineItem);
        }
      }
    });
  }
  return notAvailableLineItems;
};

export const ButtonDisabled = (menuItem, currentModifier) => {
  if (menuItem && menuItem.modifier && currentModifier) {
    for (let i = 0; i < menuItem.modifier.length; i++) {
      const found = currentModifier.find(
        (mod) => mod.name === menuItem.modifier[i].name
      );
      if (
        !found &&
        typeof menuItem.modifier[i].minimum === "number" &&
        menuItem.modifier[i].minimum > 0
      ) {
        return true;
      } else if (
        found &&
        found.chosenValue &&
        menuItem.modifier[i].minimum &&
        menuItem.modifier[i].maximum &&
        (found.chosenValue.length < menuItem.modifier[i].minimum ||
          found.chosenValue.length > menuItem.modifier[i].maximum)
      ) {
        return true;
      }
    }
    return false;
  }
  return false;
};

export const CalculateCartLength = (cart) => {
  let count = 0;
  cart.lineItems.forEach((item) => {
    count += item.count;
  });
  return count;
};

const SearchStringMatch = (needle, haystack) => {
  if (typeof haystack === "string") {
    return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
  }
  return false;
};

const IsMenuMatch = (menu, searchQuery) => {
  for (const menuItem of menu.menuItems) {
    if (
      SearchStringMatch(searchQuery, menuItem.name) ||
      SearchStringMatch(searchQuery, menuItem.description)
    ) {
      return true;
    }
  }
  return false;
};

export const CalculateWindowWidth = () => {
  //all our components are wrapped in container whose width is 100% below 576 px, 540px when screen size is between 576 to 768 px and 720px when screen size > 768 px. Our numbers area accordingly adjusted
  if (window.innerWidth <= 576) {
    return window.innerWidth;
  } else if (window.innerWidth > 576 && window.innerWidth < 768) {
    return 540;
  } else {
    return 600;
  }
};

export const CalculateWindowHeight = () => {
  return window.innerHeight;
};

export const IsTagMatch = (searchQuery, tag) => {
  if (Array.isArray(tag)) {
    for (let i = 0; i < tag.length; i++) {
      if (SearchStringMatch(searchQuery, tag[i].name)) {
        return true;
      }
    }
    return false;
  }
};

export const GenerateEpochDate = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  // $FlowFixMe
  let newDate = Date.parse(new Date(year, month, day, 0, 0, 0, 0));
  return newDate;
};

export const Search = (stalls, searchQuery) => {
  let searchedStalls = [];
  if (Array.isArray(stalls)) {
    for (const stall of stalls) {
      if (
        searchQuery.length === 0 ||
        SearchStringMatch(searchQuery, stall.name) ||
        SearchStringMatch(searchQuery, stall.description) ||
        IsTagMatch(searchQuery, stall.tag) ||
        IsMenuMatch(stall.menu, searchQuery)
      ) {
        searchedStalls.push(stall);
      }
    }
  }

  return searchedStalls;
};

export const TagFilter = (stalls, activeTagFilterId) => {
  let searchedStalls = [];
  for (const stall of stalls) {
    if (
      !activeTagFilterId ||
      activeTagFilterId.length === 0 ||
      stall.tag.findIndex((tag) => tag._id === activeTagFilterId) >= 0
    ) {
      searchedStalls.push(stall);
    }
  }
  return searchedStalls;
};

export const FormatDateTime = (timestamp, verbose = false) => {
  let d = new Date(timestamp);
  if (verbose) {
    return format(d, "PP");
  }
  return d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
};

export const GetLocalizedTime = (timestamp) => {
  let d = new Date(timestamp / 1000);
  return format(d, "PPpp");
};

export const ExtractTime = (timestamp) => {
  let d = new Date(timestamp);
  return format(d, "p");
};

export const ActiveThemeStyleSheet = () => {
  return config.get("theme_config")[config.get("active_theme")]["style_sheet"];
};

export const FindMenuItem = (menu, id) => {
  if (menu && menu.menuItems) {
    return menu.menuItems.find((item) => item._id === id);
  }
};

export const IsLoggedIn = (userInfo) => {
  return !!userInfo.oauth.accessToken;
};

export const IsCardPresent = (userInfo) => {
  let cardData = userInfo.cardData;
  return !!(
    cardData.cardNumber &&
    cardData.expiry &&
    cardData.cvc &&
    cardData.zip
  );
};

export const FindStall = (event, id) => {
  if (event && event.stalls) {
    const stallIndex = event.stalls.findIndex((stall) => stall._id === id);
    if (stallIndex >= 0) {
      return event.stalls[stallIndex];
    }
  }
  return null;
};

export const FindLineItem = (cart, lineItemId) => {
  if (cart && cart.lineItems) {
    const itemIndex = cart.lineItems.findIndex(
      (lineItem) => lineItem._id === lineItemId
    );
    if (itemIndex >= 0) {
      return cart.lineItems[itemIndex];
    }
  }
  return null;
};

export const GenerateWaitTime = (time) => {
  return Math.round(time / (1000 * 60));
};

export const FindOrder = (orders, orderId) => {
  return orders.findIndex((order) => order._id === orderId);
};

export const DeleteLineItemFromCart = (cart, lineItemId) => {
  if (cart && cart.lineItems) {
    const itemIndex = cart.lineItems.findIndex(
      (item) => item._id === lineItemId
    );
    if (itemIndex >= 0) {
      cart.lineItems.splice(itemIndex, 1);
    }
  }
};

export const GenerateExpenseLevel = (expenseLevel) => {
  let i = expenseLevel;
  let str = "";
  while (i > 0) {
    str += "$";
    i--;
  }
  return str;
};

const FilterbyTag = (stalls, tag) => {
  return stalls.filter((stall) => {
    const validTags = stall.tag.filter((item) => {
      return item.name === tag;
    });
    return validTags.length > 0;
  });
};

const FilterByExpenseLevel = (stalls, price) => {
  return stalls.filter((stall) => {
    if (typeof parseInt(price) === "number") {
      return stall.expenseLevel === parseInt(price);
    }
    return false;
  });
};

export const ModifyTime = (time) => {
  if (time) {
    let timeArr = time.split(":");
    if (timeArr[0] >= "12") {
      if (timeArr[0] === "12") {
        return `${timeArr[0]}:${timeArr[1]} PM`;
      }
      return `${parseInt(timeArr[0]) - 12}:${timeArr[1]} PM`;
    }
    return `${timeArr[0]}:${timeArr[1]} AM`;
  }
  return "";
};

export const CheckValidTime = (businessTime) => {
  if (businessTime) {
    let time = new Date();
    let startTime = moment(businessTime.startTime, "HH:mm:ss");
    let endTime = moment(businessTime.endTime, "HH:mm:ss");
    return moment(time).isAfter(startTime) && moment(time).isBefore(endTime);
  }
};

export const IsTimeInWindow = (startTimeInMs, endTimeInMs) => {
  let time = new Date();
  let startTime = moment(startTimeInMs);
  let endTime = moment(endTimeInMs);
  return moment(time).isAfter(startTime) && moment(time).isBefore(endTime);
};

export const FilterStalls = (stalls, filterObject, sortType) => {
  let filteredStalls = stalls;
  if (filterObject.cuisine) {
    filteredStalls = FilterbyTag(filteredStalls, filterObject.cuisine);
  }
  if (filterObject.expenseLevel) {
    filteredStalls = FilterByExpenseLevel(
      filteredStalls,
      filterObject.expenseLevel
    );
  }
  if (sortType !== "") {
    let copyStalls = [...filteredStalls];
    if (sortType === "Popular") {
      copyStalls.sort(function (a, b) {
        if (a && b && a.reviews && b.reviews) {
          return b.reviews - a.reviews;
        }
        return 0;
      });
    }
    if (sortType === "Rating") {
      copyStalls.sort(function (a, b) {
        if (a && b && a.rating && b.rating) {
          return b.rating - a.rating;
        }
        return 0;
      });
    }
    return copyStalls;
  }
  return filteredStalls;
};

export const CalculateObjectNonEmptyLength = (obj) => {
  return Object.values(obj).filter((value) => !!value).length;
};

export const CreateCategories = (menuItems) => {
  let catObj = {};
  let avgCatCost = {};
  menuItems.forEach((menuItem) => {
    if (menuItem && menuItem.categories && menuItem.categories.length > 0) {
      menuItem.categories.forEach((category) => {
        if (catObj.hasOwnProperty(category)) {
          catObj[category].push(menuItem);
        } else {
          catObj[category] = [];
          catObj[category].push(menuItem);
        }
        if (!avgCatCost.hasOwnProperty(category)) {
          // $FlowFixMe
          avgCatCost[category] = {
            sum: 0,
            count: 0,
          };
        }
        menuItem.variations.forEach((variation) => {
          avgCatCost[category] = {
            sum: avgCatCost[category].sum + variation.price.amount,
            count: avgCatCost[category].count + 1,
          };
        });
      });
    } else {
      if (catObj.hasOwnProperty("Misc")) {
        // $FlowFixMe
        catObj["Misc"].push(menuItem);
      } else {
        // $FlowFixMe
        catObj["Misc"] = [];
        // $FlowFixMe
        catObj["Misc"].push(menuItem);
      }
    }
  });
  // If there is only one category then rename category to "Menu" itself.
  const keys = Object.keys(catObj);
  if (keys.length === 1) {
    catObj = {
      Menu: catObj[keys[0]],
    };
  }
  // $FlowFixMe
  const sortedCategories = Object.keys(catObj).sort((a, b) => {
    let score1 = 0,
      score2 = 0;
    if (avgCatCost.hasOwnProperty(a)) {
      score1 = avgCatCost[a].sum / avgCatCost[a].count;
    }
    if (avgCatCost.hasOwnProperty(b)) {
      score2 = avgCatCost[b].sum / avgCatCost[b].count;
    }
    return score2 - score1;
  });
  return [catObj, sortedCategories];
};

export const UpdateItemInCart = (cart, lineItem) => {
  if (cart && cart.lineItems) {
    const itemIndex = cart.lineItems.findIndex(
      (item) => item._id === lineItem._id
    );
    if (lineItem.count === 0) {
      cart.lineItems.splice(itemIndex, 1);
    } else {
      cart.lineItems.splice(itemIndex, 1, lineItem);
    }
  }
};

export const GetExpenseLevels = (stalls) => {
  let priceObj = {};
  stalls.forEach((stall) => {
    if (stall.expenseLevel) {
      if (priceObj.hasOwnProperty(stall.expenseLevel)) {
        priceObj[stall.expenseLevel].push(stall);
      } else {
        priceObj[stall.expenseLevel] = [];
        priceObj[stall.expenseLevel].push(stall);
      }
    }
  });
  return priceObj;
};

export const compareValues = (key) => {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }
    let comparison = 0;
    if (a[key] > b[key]) {
      comparison = 1;
    } else if (a[key] < b[key]) {
      comparison = -1;
    }
    return comparison;
  };
};

export function truncateString(str, num) {
  if (!str) {
    return str;
  }
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (str.length <= num) {
    return str;
  }
  // Return str truncated with '...' concatenated to the end of str.
  return str.slice(0, num) + "...";
}

export const findTag = (tagType, tags) => {
  if (Array.isArray(tags)) {
    const cuisineTag = tags.find((tag) => tag.type === "CUISINE");
    if (cuisineTag) {
      return cuisineTag.name;
    }
    return "";
  }
};

export function CalculateLineItemTotal(cartItem) {
  let subTotal = cartItem.selectedVariation.price.amount;
  if (cartItem.modifiers) {
    cartItem.modifiers.forEach((modGroup) => {
      modGroup.chosenValue.forEach((modValue) => {
        subTotal += modValue.price.amount;
      });
    });
  }
  return {
    amount: subTotal,
    currency: cartItem.selectedVariation.price.currency,
  };
}

export async function CalculateInvoice(cart) {
  const response = await fetch(config.get("backend") + "/order/invoice", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cart: cart,
    }),
  });
  return await response.json();
}

export async function getEvent(eventId) {
  const response = await fetch(config.get("backend") + "/event?id=" + eventId);
  return await response.json();
}

export async function getStall(stallId) {
  const response = await fetch(config.get("backend") + "/stall/" + stallId);
  return await response.json();
}

export function getActiveTags(stalls) {
  if (Array.isArray(stalls)) {
    let activeTagMap = {};
    const duplicatedTags = stalls.map((stall) => stall.tag).flat();
    for (const tag of duplicatedTags) {
      activeTagMap[tag._id] = tag;
    }
    return Object.values(activeTagMap);
  }
  return [];
}

export function loadScript(scriptSource, callback) {
  let scriptLoad = document.createElement("script");
  scriptLoad.src = scriptSource;
  scriptLoad.type = "text/javascript";
  scriptLoad.async = false;
  scriptLoad.onload = callback;
  document.getElementsByTagName("head")[0].appendChild(scriptLoad);
}

export const fetchOrderData = async (orderId) => {
  const response = await fetch(config.get("backend") + "/order?id=" + orderId);
  return response.json();
};

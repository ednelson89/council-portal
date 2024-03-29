const game = () => ({
  gameID: generateID(),
  gameName: "",
  gameDesc: [""],
  gameGM: "",
  gameDate: getDate(),
  gamePlayers: [],
  gameChars: [],
  gameTokens: [],
  gameType: "",
  gameMap: "",
  journalPosts: [
    {
      journalID: generateID(),
      journalTitle: "Create Journals",
      journalDate: "",
      journalContent: [
        "Here you can read, add, and edit journal entries. To add an image, simply copy and paste the url of the image into it's own line.",
        "Example:",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "img-https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non."
      ],
      journalAuthor: "JAuthor 1"
    }
  ],
  wikiPosts: [
    {
      wikiID: generateID(),
      wikiTitle: "Create Wiki Entry",
      wikiDate: "",
      wikiContent: [
        "Here you can read, add, and edit wiki entries. To add an image, simply copy and paste the url of the image into it's own line.",
        "Example:",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "img-https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non."
      ],
      wikiAuthor: "JAuthor 1"
    }
  ]
});

var generateID = function() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
};

var getDate = function() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;

  return today;
};

export { game };

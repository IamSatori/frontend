(function () {
  const contractabi = [
    {
      inputs: [
        { internalType: "address", name: "_ownercon", type: "address" },
        { internalType: "address", name: "Tokenad", type: "address" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "createVault",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "_ownercon", type: "address" }],
      name: "changeOwner",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
      name: "buyVaultlevel",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "getVaultcount",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
      name: "getVaultInfo",
      outputs: [
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "address", name: "", type: "address" },
        { internalType: "address", name: "", type: "address" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "bool", name: "", type: "bool" },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  const erc20abi = [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_spender",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_from",
          type: "address",
        },
        {
          name: "_to",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [
        {
          name: "",
          type: "uint8",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          name: "balance",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_to",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_owner",
          type: "address",
        },
        {
          name: "_spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      payable: true,
      stateMutability: "payable",
      type: "fallback",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
  ];

  var grid = document.getElementById("grid-container");
  var modal = document.getElementById("introModal");

  const colorlist = {
    withdrawready: "#4D49BF",
    timeleft: "#03A64A",
    notstart: "#070C0D",
    own: "#F26241",
    created: "#caa6fe",
  };

  var userLang = navigator.language || navigator.userLanguage;
  if (userLang == "ko-KR") {
    alert("not allow.");
    window.location.href = "https://www.google.com";
  }
  if (userLang == "zh-CN") {
    alert("not allow");
    window.location.href = "https://www.google.com";
  }
  const maincontract = "0xC9C8e888133BC0f422f10cd9423A2CF6B4CCCad5";
  const tokencontract = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d";
  var workcontract;
  var token;
  var web3;
  var addr;
  var timeloop;
  var transcationworking = false;
  const cooldown = 300;
  const tokendecimal = 18;
  const createusdc = BigInt(40 * 10 ** tokendecimal);
  function addVault(id, time, level, held, status) {
    let div = document.createElement("div");
    div.setAttribute("class", "grid-item");
    if (time != 0) {
      time = parseInt(time);
      time = time + cooldown;
      time = new Date(time * 1000);
      time = time.toLocaleString();
    }

    div.style.backgroundColor = colorlist[status];
    div.innerHTML = `
    <div class="info">
      <h3>ID : ${id}</h3>
    </div>
    <div class="info">
      <h3 id='time-${id}'>Close Time : ${time}</h3>
    </div>
    <div class="info">
      <h3>Level : ${level}</h3>
    </div>
    <div class="info">
      <h3>Held : ${held} USDC</h3>
    </div>
    `;
    grid.appendChild(div);
  }

  async function buyvault(id, info) {
    let held = info[1];
    let time = info[4];
    let owner = info[3];
    let creator = info[2];
    transcationworking = true;
    if (creator == addr) {
      alert("You are creator");
      return;
    }

    if (new Date().getTime() / 1000 > time * 1000 && time != 0) {
      alert("Vault time is over");
      return;
    }

    if (
      (await token.methods.allowance(addr, maincontract).call()) < BigInt(held)
    ) {
      alert(
        "Please approve " +
          parseInt(held * 0.1 ** tokendecimal) +
          " USDC to contract"
      );
      await token.methods
        .approve(maincontract, BigInt(held))
        .send({ from: addr })
        .then((res) => {
          transcationworking = false;
          updateStatus();
        });
    }

    workcontract.methods
      .buyVaultlevel(id)
      .send({ from: addr })
      .then((res) => {
        alert("Success! \n" + res.transactionHash);
      });
  }
  function deleteall() {
    var gridItems = grid.getElementsByClassName("grid-item");
    for (var i = gridItems.length - 1; i > 0; i--) {
      grid.removeChild(gridItems[i]);
    }
  }
  async function updateStatus() {
    deleteall();

    let count = await workcontract.methods.getVaultcount().call();
    count++;
    for (let i = 1; i < count; i++) {
      let vault = await workcontract.methods.getVaultInfo(i).call();
      let time = vault[4];
      let level = vault[5];
      let held = parseInt(vault[1] * 0.1 ** tokendecimal);
      let status = "notstart";
      time = parseInt(time);
      time = time + cooldown;
      vault[2] = vault[2].toLowerCase();
      vault[3] = vault[3].toLowerCase();
      if (vault[6] == true) {
        continue;
      } else if (vault[2] == addr) {
        status = "created";
      } else if (vault[4] == 0) {
        status = "notstart";
      } else if (vault[3] == addr && new Date().getTime() < time * 1000) {
        status = "own";
      } else if (vault[3] == addr && new Date().getTime() > time * 1000) {
        status = "withdrawready";
      } else if (vault[3] != addr && new Date().getTime() > time * 1000) {
        continue;
      } else if (vault[3] != addr && new Date().getTime() < time * 1000) {
        status = "timeleft";
      }
      if (vault[4] == 0) {
        time = 0;
      }
      addVault(i, time, level, held, status);
    }
    document.querySelectorAll("#grid-container > *").forEach((item) => {
      if (item.children[0].children[0] == undefined) {
        return;
      }

      item.addEventListener("click", async (event) => {
        let id =
          event.currentTarget.children[0].children[0].innerHTML.split(" ")[2];

        if (confirm("Did you click? " + id) == false) {
          return;
        }
        if (transcationworking) {
          alert("Please wait for transcation");
          return;
        }
        let info = await workcontract.methods.getVaultInfo(id).call();
        info[2] = info[2].toLowerCase();
        info[3] = info[3].toLowerCase();
        let time = info[4];
        time = parseInt(time);
        time = time + cooldown;
        if (info[4] == 0) {
          time = 0;
        }

        if (new Date().getTime() > time * 1000 && info[3] == addr) {
          transcationworking = true;
          await workcontract.methods
            .withdraw(id)
            .send({ from: addr })
            .then((res) => {
              alert("Success! \n" + res.transactionHash);
              transcationworking = false;
              updateStatus();
            });
          return;
        }
        if (info[2] == addr || info[3] == addr) {
          alert("You are owner or creator");
          return;
        } else {
          buyvault(id, info);
        }
      });
    });
  }

  document
    .getElementById("introButton")
    .addEventListener("click", async function () {
      try {
        const provider = await detectEthereumProvider();
        if (!provider) {
          alert("Please install Metamask");
          return;
        }
        await provider.enable();
        web3 = new Web3(provider);
        addr = await web3.eth.getCoinbase();

        let network = await web3.eth.net.getId();

        if (network != 56) {
          alert("Please change network to BNB mainnet");
          return;
        }

        alert("Login Success! \n" + addr);

        workcontract = new web3.eth.Contract(contractabi, maincontract);
        token = new web3.eth.Contract(erc20abi, tokencontract);
      } catch (error) {
        alert(error);
      }
      updateStatus();
      if (!timeloop) timeloop = setInterval(updateStatus, 10000);
      modal.style.display = "none";
    });
  document
    .getElementsByClassName("plus-button")[0]
    .addEventListener("click", async function () {
      if (transcationworking) {
        alert("Please wait for transcation");
        return;
      }
      if (
        (await token.methods.allowance(addr, maincontract).call()) < createusdc
      ) {
        alert("Please approve 40 USDC to contract");
        await token.methods
          .approve(maincontract, createusdc)
          .send({ from: addr });
      }
      transcationworking = true;
      workcontract.methods
        .createVault()
        .send({ from: addr })
        .then((res) => {
          alert("Success! \n" + res.transactionHash);
          updateStatus();
        });
    });
})();

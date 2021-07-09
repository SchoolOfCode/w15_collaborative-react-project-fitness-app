import { useState, useEffect } from "react";

const PRIVATE = "3XrM-f9kdUeAuuv95QrE8Aal7MEJy5UUGMfgoBYZMR4A";

const Avatar = () => {
  const [value, setValue] = useState("");
  const onChange = (event) => setValue(event.target.value);

  const [seeds, setSeeds] = useState("");
  const getAvatar = (event) => setSeeds(event.target.value);

  async function addPlayer() {
    const addURL = `https://www.dreamlo.com/lb/${PRIVATE}/add/${value}/2000/30/${seeds}`;
    await fetch(addURL);
  }

  console.log(seeds);
  return (
    <div>
      <img
        className="results-avatar"
        src={`https://avatars.dicebear.com/api/human/${value}.svg`}
        alt=""
      />
      <input onChange={onChange} value={value} type="text" />
      <select onChange={getAvatar} id="seeds" name="seed">
        <optgroup label="Select">
          <option value="human">Human</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="bottts">Bots</option>
          <option value="avataaars">Avatars</option>
          <option value="identicon">Identicon</option>
          <option value="jdenticon">Jdenticon</option>
          <option value="gridy">Gridy</option>
          <option value="micah">Micah</option>
          <option value="initials">Initials</option>
        </optgroup>
      </select>
      <button onClick={addPlayer}>Add</button>
    </div>
  );
};

export default Avatar;

import closeIcon from "/image/close-icon.svg";
const Dialog = ({
  setIsOpenDialog,
}: {
  setIsOpenDialog: (arg: boolean) => void;
}) => {
  return (
    <div className="dialog">
      <div className="dialog__close">
        <img
          src={closeIcon}
          alt="close"
          onClick={() => setIsOpenDialog(false)}
        />
      </div>
      <h2>Privacy Policy</h2>
      <span>Confidentiality agreement for the processing of personal data</span>
      <div className="dialog__content">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          adipisci esse minima. Eligendi consequatur consectetur ea, doloremque
          incidunt sed, earum, dolorem mollitia ullam cumque sequi! Accusantium
          dolores modi distinctio adipisci?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          adipisci esse minima. Eligendi consequatur consectetur ea, doloremque
          incidunt sed, earum, dolorem mollitia ullam cumque sequi! Accusantium
          dolores modi distinctio adipisci?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          adipisci esse minima. Eligendi consequatur consectetur ea, doloremque
          incidunt sed, earum, dolorem mollitia ullam cumque sequi! Accusantium
          dolores modi distinctio adipisci?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          adipisci esse minima. Eligendi consequatur consectetur ea, doloremque
          incidunt sed, earum, dolorem mollitia ullam cumque sequi! Accusantium
          dolores modi distinctio adipisci?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          adipisci esse minima. Eligendi consequatur consectetur ea, doloremque
          incidunt sed, earum, dolorem mollitia ullam cumque sequi! Accusantium
          dolores modi distinctio adipisci?
        </p>
      </div>
    </div>
  );
};

export default Dialog;

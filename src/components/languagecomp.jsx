
const Languagecomp = () => {
        return (
        <>
        {/* Main */}
        <div className="language-main-section">
            <div className="language-container">
                <div className="language-header">
                <h2>Language Settings</h2>
                <p>
                    Select the language you prefer for browsing, shopping and
                    communications.
                </p>
                </div>

                <div className="language-inputs">
                <div className="langauge-box">
                    <input type="radio" name="language" />
                    <label>English - EN</label>
                </div>
                <div className="langauge-box">
                    <input type="radio" name="language" />
                    <label>हिन्दी - HI - <span>अनुवाद</span></label>
                </div>
                <div className="langauge-box">
                    <input type="radio" name="language" />
                    <label>தமிழ் - TA - <span>மொழிபெயர்ப்பு</span></label>
                </div>
                <div className="langauge-box">
                    <input type="radio" name="language" />
                    <label>తెలుగు - TE - <span>అనువాదం</span></label>
                </div>
                <div className="langauge-box">
                    <input type="radio" name="language" />
                    <label>ಕನ್ನಡ - KN - <span>ಭಾಷಾಂತರ</span></label>
                </div>
                <div className="langauge-box">
                    <input type="radio" name="language" />
                    <label>മലയാളം - ML - <span>വിവർത്തനം</span></label>
                </div>
                <div className="langauge-box">
                    <input type="radio" name="language" />
                    <label>বাংলা - BN - <span>অনুবাদ</span></label>
                </div>
                <div className="langauge-box">
                    <input type="radio" name="language" />
                    <label>मराठी - MR - <span>भाषांतर</span></label>
                </div>
                </div>

                <div className="language-butttons">
                <button>Cancel</button>
                <button>Save Changes</button>
                </div>
            </div>
        </div>
        </>
  );
}

export default Languagecomp;


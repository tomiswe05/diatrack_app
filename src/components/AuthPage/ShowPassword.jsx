import './ShowPassword.css';
function ShowPassword({ showPassword, setShowPassword }) {
    return (
        <div className="show">
            <input
                type="checkbox"
                className="show-span"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
            />
            <span className='show-text'>Show Password</span>
        </div>
    );
}
export default ShowPassword;
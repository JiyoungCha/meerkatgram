import './UserInfo.css';

export default function UserInfo() {
  return (
    <>
      <div className="registration-container">
        <input type="text" className='input-big-border' name="password" id="password" placeholder='password' />
        <input type="text" className='input-big-border' name="passwordChk" id="passwordChk" placeholder='password check' />
        <input type="text" className='input-big-border' name="name" id="name" value='hui_bao' />
        <input type="file" name="profile" id="profile" accept="image/*" />
        <div className="profile profile-medium" style={{backgroundImage: `url("/dev/hui.jpg")`}}></div>
        <button type="button" className="btn-big bg-red">Change</button>
      </div>
    </>
  )
}
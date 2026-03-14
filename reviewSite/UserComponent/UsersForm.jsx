
function UsersForm() {
    return (
        <div>
            <form>
                <label> Name</label>
                <input placeholder=" Enter Name"/>
                <label>Email</label>
                <input placeholder="Enter email"/>
                <label>Select Nationality</label>
                <select>
                 <option>Cameroonian</option>
                 <option>Nigerian</option>
                 <option>Ghana</option>
                </select>
            </form>
        </div>
    )
}

export default UsersForm

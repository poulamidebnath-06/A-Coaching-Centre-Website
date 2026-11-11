const navHtml =` <div style="background-color: #0e065c;">
    <nav>
        <div style="display: flex; gap: 1100px;">
            <div style="display: flex; gap: 10px;">
            <img src="images/profilepicture-removebg-preview.png" style="height: 50px; width: 50px;">
            <h3 style="color: aliceblue;">My Profile</h3>
            </div>
            <div style="display: flex; gap: 50px; justify-content: flex-end;">
                <p><a href="home.html" style="color: aliceblue; font-size: large;">Home</a></p>
                <p><a href="about.html" style="color: aliceblue;font-size: large;">About</a></p>
                <p><a href="contact.html" style="color: aliceblue;font-size: large;">Contact</a></p>
            </div>
        </div>
    </nav>
    </div>`;
    document.body.insertAdjacentHTML('afterbegin', navHtml);
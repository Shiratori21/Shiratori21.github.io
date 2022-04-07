"use strict";

const btnGoForm = document.querySelector(".sign-up-btn");

btnGoForm.addEventListener("click", function (e) {
  const html = `
  <div class="form-container">
      <ion-icon
        class="sign-up-modal__icon-close btn--close-modal close--signup-modal"
        name="close-outline"
      ></ion-icon>
      <h1 class="heading-primary signup-heading">Peach IDを作成</h1>
      <form action="" class="signup-form">
        <div class="form-names">
          <input
            type="text"
            class="signup-form__input"
            placeholder="姓(フリガナ)"
          />
          <input
            type="text"
            class="signup-form__input"
            placeholder="名(フリガナ)"
          />
          <input type="text" class="signup-form__input" placeholder="姓" />
          <input type="text" class="signup-form__input" placeholder="名" />
        </div>
        <input
          type="birthday"
          class="signup-form__input input-birthday"
          placeholder="生年月日"
        />
        <input
          type="email"
          class="signup-form__input input-email"
          placeholder="name@example.com"
        />
        <div class="signup-form__messaage-container">
          <p class="signup-form__messaage"></p>
        </div>
        <input
          type="password"
          class="signup-form__input input-password"
          placeholder="パスワード"
        />
      </form>
      <div class="btn-container">
        <button class="global-btn form-btn">続ける</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("afterbegin", html);
});

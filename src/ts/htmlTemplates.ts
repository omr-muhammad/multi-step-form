export const stepsHeadings = {
  stepOne: {
    title: "Personal Info",
    subtitle: "Please provide your name, email address, and phone number.",
  },
  stepTwo: {
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing.",
  },
  stepThree: {
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience",
  },
  stepFour: {
    title: "Finishing up",
    subtitle: "Double-check every thing looks OK before confirming.",
  },
};

export const stepOne = `
          <form>
            <div class="name">
              <label for="username">Name</label>
              <input
                required
                type="text"
                id="username"
                placeholder="e.g. Stephen King"
                class="form-input"
              />
            </div>
            <div class="email">
              <label for="email">Email Address</label>
              <input
                required
                type="email"
                id="email"
                placeholder="e.g. stephenking@lorem.com"
                class="form-input"
              />
            </div>
            <div class="phone-number">
              <label for="phone-number">Phone Number</label>
              <input
                required
                type="tel"
                id="email"
                placeholder="e.g. +1 234 567 890"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{3,4}"
                class="form-input"
              />
            </div>
          </form>
`;

export const stepTwo = `
          <div class="plans-step">
            <div class="plans">
              <div class="plan">
                <div class="plan-img">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
                      <path
                        fill="#FFF"
                        fill-rule="nonzero"
                        d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
                      />
                    </g>
                  </svg>
                </div>
                <div class="text">
                  <h4 class="plan-title">Arcade</h4>
                  <p class="plan-price">$9/mo</p>
                </div>
              </div>
              <div class="plan">
                <div class="plan-img">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <circle cx="20" cy="20" r="20" fill="#F9818E" />
                      <path
                        fill="#FFF"
                        fill-rule="nonzero"
                        d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"
                      />
                    </g>
                  </svg>
                </div>
                <div class="text">
                  <h4 class="plan-title">Advanced</h4>
                  <p class="plan-price">$12/mo</p>
                </div>
              </div>
              <div class="plan">
                <div class="plan-img">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <circle cx="20" cy="20" r="20" fill="#483EFF" />
                      <path
                        fill="#FFF"
                        fill-rule="nonzero"
                        d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
                      />
                    </g>
                  </svg>
                </div>
                <div class="text">
                  <h4 class="plan-title">Pro</h4>
                  <p class="plan-price">$15/mo</p>
                </div>
              </div>
            </div>
            <div class="plans-switcher">
              <span class="active">Monthly</span>
              <div class="switcher">
                <span class="switcher-ball"></span>
              </div>
              <span>Yearly</span>
            </div>
          </div>
`;

const stepThree = `
          <div class="add-ons">
            <div class="add-on">
              <div class="check-input"><input type="checkbox" /></div>
              <div class="text">
                <h4 class="title">Online services</h4>
                <p class="subtitle">Access to multiplayer games</p>
              </div>
              <div class="price">+$1/mo</div>
            </div>
            <div class="add-on">
              <div class="check-input"><input type="checkbox" /></div>
              <div class="text">
                <h4 class="title">Larger storage</h4>
                <p class="subtitle">Extra 1TB of cloud save</p>
              </div>
              <div class="price">+$2/mo</div>
            </div>
            <div class="add-on">
              <div class="check-input"><input type="checkbox" /></div>
              <div class="text">
                <h4 class="title">Customizable profile</h4>
                <p class="subtitle">Custom theme on your profile</p>
              </div>
              <div class="price">+$2/mo</div>
            </div>
          </div>
`;

const stepFour = `
          <div class="picks-summary">
            <div class="arcade-pick">
              <div class="text">
                <h3 class="title">Arcade (Monthly)</h3>
                <span>Change</span>
              </div>
              <p class="price">$9/mo</p>
            </div>

            <hr />

            <div class="add-ons-picks">
              <div>
                <span>Online services</span>
                <span>$+1/mo</span>
              </div>
              <div>
                <span>Larger storage</span>
                <span>$+2/mo</span>
              </div>
            </div>
          </div>
          <div class="total-price">
            <span>Total (per month)</span>
            <span>$12/mo</span>
          </div>
`;

const thankYou = `
          <div class="thank-you">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 80 80"
            >
              <g fill="none">
                <circle cx="40" cy="40" r="40" fill="#F9818E" />
                <path
                  fill="#E96170"
                  d="M48.464 79.167c.768-.15 1.53-.321 2.288-.515a40.04 40.04 0 0 0 3.794-1.266 40.043 40.043 0 0 0 3.657-1.63 40.046 40.046 0 0 0 12.463-9.898A40.063 40.063 0 0 0 78.3 51.89c.338-1.117.627-2.249.867-3.391L55.374 24.698a21.6 21.6 0 0 0-15.332-6.365 21.629 21.629 0 0 0-15.344 6.365c-8.486 8.489-8.486 22.205 0 30.694l23.766 23.775Z"
                />
                <path
                  fill="#FFF"
                  d="M40.003 18.333a21.58 21.58 0 0 1 15.31 6.351c8.471 8.471 8.471 22.158 0 30.63-8.47 8.47-22.156 8.47-30.627 0-8.47-8.472-8.47-22.159 0-30.63a21.594 21.594 0 0 1 15.317-6.35Zm9.865 15c-.316.028-.622.15-.872.344l-12.168 9.13-5.641-5.642c-1.224-1.275-3.63 1.132-2.356 2.356l6.663 6.663c.56.56 1.539.63 2.173.156l13.326-9.995c1.122-.816.43-2.993-.956-3.013a1.666 1.666 0 0 0-.17 0Z"
                />
              </g>
            </svg>
            <h2>Thank you!</h2>
            <p>
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </p>
          </div>
`;

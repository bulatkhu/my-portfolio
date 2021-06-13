<template>
  <div class="contacts">
    <h4 class="contacts__title"><span>Contacts</span></h4>

    <div class="contacts-content">
      <div class="contacts-content__col contentCol">
        <div class="contentCol-info">
          <p class="contentCol-info__text">Contact information</p>

          <ul class="contentCol-info-list">
            <li class="contentCol-info-list__item">
              <a target="_blank" href="mailto:hudainazarov.b@yandex.ru">
                <EmailIcon />

                <span class="contentCol-info-list__text"
                  >hudainazarov.b@yandex.ru</span
                >
              </a>
            </li>
            <li class="contentCol-info-list__item">
              <LocationIcon />
              <span class="contentCol-info-list__text">Espoo, Finland</span>
            </li>
            <li class="contentCol-info-list__item">
              <a target="_blank" href="tel:0402523812">
                <PhoneIcon />
                <span class="contentCol-info-list__text">0402523812</span>
              </a>
            </li>
            <li class="contentCol-info-list__item">
              <a target="_blank" href="https://t.me/bulatkhu">
                <TelegramIcon />

                <span class="contentCol-info-list__text">@bulatkhu</span>
              </a>
            </li>
          </ul>
        </div>

        <SocialLinks class-name="contentCol-info__social" />
      </div>
      <div
        class="contacts-content__col contentCol"
        :style="{
          backgroundImage:
            'url(' +
            require('@/assets/svg-icons/contacts/sending_emails.png') +
            ')',
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import PhoneIcon from "@/assets/svg-icons/contacts/phone-icon.svg";
import LocationIcon from "@/assets/svg-icons/contacts/location-icon.svg";
import TelegramIcon from "@/assets/svg-icons/contacts/telegram-icon.svg";
import EmailIcon from "@/assets/svg-icons/contacts/email-icon.svg";
import SocialLinks from "./SocialLinks";

export default {
  components: {
    SocialLinks,
    PhoneIcon,
    LocationIcon,
    EmailIcon,
    TelegramIcon,
  },
};
</script>

<style scoped lang="scss">
.contacts {
  margin: auto;
  color: #fff;
  width: 700px;
  max-width: 100%;
  &__title {
    font-size: 25px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-align: center;

    margin-bottom: 40px;

    span {
      position: relative;
      padding-bottom: 10px;

      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        height: 2px;

        width: 70%;
        background-color: #2b2d33;

        left: 50%;
        transform: translateX(-50%);

        border-radius: 2px;
      }
    }
  }
}

.contacts-content {
  display: flex;
  width: 800px;
  max-width: 100%;
  align-items: stretch;
  justify-content: space-between;

  &__col {
    flex-basis: calc(50% - 10px);
  }

  @media (max-width: 520px) {
    flex-direction: column;

    &__col {
      flex-basis: 100%;
      align-items: center;
      flex-direction: column;
      display: flex;

      &:last-child {
        display: none;
      }
    }
  }
}

.contentCol-info {
  &__social {
    margin-top: 25px;
  }

  &__text {
    padding-left: 30px;
    font-weight: bold;
    font-size: 20px;
  }

  &__list {
  }

  &-list {
    &__text {
      position: relative;

      &:before {
        transition: all 0.3s;
        content: "";
        width: 100%;
        left: 0;
        bottom: -4px;
        height: 1px;
        position: absolute;
        background-color: #fff;

        transform: scale(0);
      }
    }

    &__item {
      position: relative;
      padding-left: 30px;

      margin: 10px 0;

      &:hover {
        span {
          &:before {
            transform: scale(1);
          }
        }
      }

      svg {
        width: 18px;
        height: 18px;

        position: absolute;
        left: 0;
        top: 50%;

        transform: translateY(-50%);

        path {
          fill: #fff;
          transition: all 0.3s;
        }
      }
    }
  }
}

.contentCol {
  &:last-child {
    background-repeat: no-repeat;
    background-position: center right;
    background-size: contain;
  }
}
</style>

import { Button } from "@chakra-ui/react";
import { Trans, useTranslation } from "react-i18next";
import { i18n, useI18n } from "~/core/i18n";
import { Page } from "~/core/page";
import { Text } from "~/core/text";

export const I18nTestPage = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useI18n();

  return (
    <Page>
      <Text>I18n test page</Text>
      <Button
        width="fit-content"
        onClick={() => {
          changeLanguage(language === "en" ? "ko" : "en");
        }}
      >
        언어 설정 변경
      </Button>
      <Text>
        <Trans i18nKey={i18n.keys.common.product} />
      </Text>
      <Text>
        <Trans i18nKey={i18n.keys.error.existsStore} />
      </Text>
      <Text>{t(i18n.keys.common.store)}</Text>
    </Page>
  );
};

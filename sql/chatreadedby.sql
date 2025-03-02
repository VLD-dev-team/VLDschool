CREATE TABLE
  public.chatreadedby (
    "chatID" integer NOT NULL,
    "userID" integer NOT NULL
  );

ALTER TABLE
  public.chatreadedby
ADD
  CONSTRAINT chat_readedby_pkey PRIMARY KEY (chatID)
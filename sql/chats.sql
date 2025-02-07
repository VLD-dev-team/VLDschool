CREATE TABLE
  public.chats (
    "chatID" serial NOT NULL,
    "chatRoomID" integer NOT NULL,
    "sendDate" timestamp without time zone NULL DEFAULT CURRENT_TIMESTAMP,
    author integer NULL,
    "textContent" text NULL,
    "responseTo_chatID" integer NULL
  );

ALTER TABLE
  public.chats
ADD
  CONSTRAINT chats_pkey PRIMARY KEY (chatID)
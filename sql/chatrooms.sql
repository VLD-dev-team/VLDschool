CREATE TABLE
  public.chatrooms (
    "roomID" serial NOT NULL,
    name character varying(255) NULL,
    "iconPath" text NULL,
    "unreadCount" integer NULL DEFAULT 0,
    "lastChatID" integer NULL
  );

ALTER TABLE
  public.chatrooms
ADD
  CONSTRAINT chatrooms_pkey PRIMARY KEY (roomID)
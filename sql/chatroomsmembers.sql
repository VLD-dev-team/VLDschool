CREATE TABLE
  public.chatroommembers (
    "roomID" integer NOT NULL,
    "userID" integer NOT NULL
  );

ALTER TABLE
  public.chatroommembers
ADD
  CONSTRAINT chatroommembers_pkey PRIMARY KEY (roomID)